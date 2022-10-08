(function ($) {
    $.fn.boxModeling = function (options) {

        const settings = $.extend({
            boxSelector: 'box',
            handlerClass: 'resize-handler',
            minWidth: 40,
            minHeight: 40,
            resize: true,
            rotate: true,
            move: true,
            // custom
            fixedRatio: true,
            remove: true,
            syncSelector: ''
        }, options);

        const boxHandlers =
            '<div class="box-handlers">' +
            '<div class="' + settings.handlerClass + ' resize left-top" style="top: -5px;left: -5px;"></div>' +
            (settings.fixedRatio ? '' : '<div class="' + settings.handlerClass + ' resize left-mid" style="left: -5px;top: calc(50% - 5px);"></div>') +
            '<div class="' + settings.handlerClass + ' resize left-bot" style="bottom: -5px;left: -5px;"></div>' +
            (settings.fixedRatio ? '' : '<div class="' + settings.handlerClass + ' resize center-top" style="top: -5px;left: calc(50% - 5px);"></div>') +
            (settings.fixedRatio ? '' : '<div class="' + settings.handlerClass + ' resize center-bot" style="bottom: -5px;left: calc(50% - 5px);"></div>') +
            '<div class="' + settings.handlerClass + ' resize right-top" style="top: -5px;right: -5px;"></div>' +
            (settings.fixedRatio ? '' : '<div class="' + settings.handlerClass + ' resize right-mid" style="right: -5px;top: calc(50% - 5px);"></div>') +
            '<div class="' + settings.handlerClass + ' resize right-bot" style="bottom: -5px;right: -5px;"></div>' +
            '<div class="' + settings.handlerClass + ' rotate" style="top: -30px;left: calc(50% - 5px);"></div>' +
            '<div class="' + settings.handlerClass + ' cancel" style="top: 0px;right: 0px;"></div>' +
            '</div>';

        return $(this).each(function () {

            const box = this;
            const syncEle = settings.syncSelector ? $(`.${settings.syncSelector}`)[0] : null;

            // $(box).css('transform', $(box).css('transform') + 'translate(-50%, -50%)');

            let initX, initY, mousePressX, mousePressY, initW, initH, initRotate;

            $(box).append(boxHandlers);

            const hLeftTop = $(box).find('.' + settings.handlerClass + '.left-top');
            const hLeftMid = $(box).find('.' + settings.handlerClass + '.left-mid');
            const hLeftBot = $(box).find('.' + settings.handlerClass + '.left-bot');
            const hCenterTop = $(box).find('.' + settings.handlerClass + '.center-top');
            const hCenterBot = $(box).find('.' + settings.handlerClass + '.center-bot');
            const hRightTop = $(box).find('.' + settings.handlerClass + '.right-top');
            const hRightMid = $(box).find('.' + settings.handlerClass + '.right-mid');
            const hRightBot = $(box).find('.' + settings.handlerClass + '.right-bot');
            
            const hRotate = $(box).find('.' + settings.handlerClass + '.rotate');

            const hRightTopRemove = $(box).find('.' + settings.handlerClass + '.cancel');

            function repositionElement(x, y) {
                $(box).css('left', x + 'px');    // <=
                $(box).css('top', y + 'px');     // <=
                // sync customer's mockup
                $(syncEle).css('left', x + 'px');    // <=
                $(syncEle).css('top', y + 'px');     // <=
            }

            function resize(w, h) {
                $(box).css('width', w + 'px');
                $(box).css('height', h + 'px');
                // sync customer's mockup
                $(syncEle).css('width', w + 'px');
                $(syncEle).css('height', h + 'px');
                // sync scale slider
                var orgWH = $('.mockup-design').width();
                var scale = w > h ? w / orgWH : h / orgWH;
                $('.scale-slider').val(scale);
            }

            function getRotation(e) {
                const st = window.getComputedStyle(e, null);
                const tm = st.getPropertyValue("-webkit-transform") ||
                    st.getPropertyValue("-moz-transform") ||
                    st.getPropertyValue("-ms-transform") ||
                    st.getPropertyValue("-o-transform") ||
                    st.getPropertyValue("transform") ||
                    "none";
                if (tm !== "none") {
                    const values = tm.split('(')[1].split(')')[0].split(',');
                    const angle = Math.round(Math.atan2(Number.parseFloat(values[1]), Number.parseFloat(values[0])) * (180 / Math.PI));
                    return (angle < 0 ? angle + 360 : angle);
                }
                return 0;
            }

            function rotateBox(deg) {
                $(box).css('transform', 'translate(-50%, -50%) rotate(' + deg + 'deg)');      // <=
                // sync customer's mockup
                $(syncEle).css('transform', 'translate(-50%, -50%) rotate(' + deg + 'deg)');      // <=
            }

            function dragSupport(event) {
                if ($(event.target).hasClass(settings.handlerClass)) {
                    return;
                }

                initX = box.offsetLeft;         // <=
                initY = box.offsetTop;          // <=
                mousePressX = event.clientX;
                mousePressY = event.clientY;

                function eventMoveHandler(event) {
                    repositionElement(initX + (event.clientX - mousePressX),
                        initY + (event.clientY - mousePressY));
                }

                box.addEventListener('mousemove', eventMoveHandler, false);         // <=
                window.addEventListener('mouseup', function eventEndHandler() {
                    box.removeEventListener('mousemove', eventMoveHandler, false);  // <=
                    window.removeEventListener('mouseup', eventEndHandler);
                }, false);
            }

            function resizeHandler(event, left, top, xResize, yResize) {
                initX = box.offsetLeft;         // <=
                initY = box.offsetTop;          // <=
                mousePressX = event.clientX;
                mousePressY = event.clientY;

                initW = box.offsetWidth;
                initH = box.offsetHeight;

                initRotate = getRotation(box);      // <=

                const initRadians = initRotate * Math.PI / 180;
                const cosFraction = Math.cos(initRadians);
                const sinFraction = Math.sin(initRadians);

                function eventMoveHandler(event) {
                    const wDiff = (event.clientX - mousePressX);
                    const hDiff = (event.clientY - mousePressY);
                    let rotatedWDiff = cosFraction * wDiff + sinFraction * hDiff;
                    let rotatedHDiff = cosFraction * hDiff - sinFraction * wDiff;

                    let newW = initW, newH = initH, newX = initX, newY = initY;

                    if (settings.fixedRatio) {
                        if (rotatedWDiff > rotatedHDiff) {
                            if (left) {
                                newW = initW - rotatedWDiff;
                                if (newW < settings.minWidth) {
                                    newW = settings.minWidth;
                                    rotatedWDiff = initW - settings.minWidth;
                                }
                            } else {
                                newW = initW + rotatedWDiff;
                                if (newW < settings.minWidth) {
                                    newW = settings.minWidth;
                                    rotatedWDiff = settings.minWidth - initW;
                                }
                            }
                            newH = newW * initH / initW;
                        } else {
                            if (top) {
                                newH = initH - rotatedHDiff;
                                if (newH < settings.minHeight) {
                                    newH = settings.minHeight;
                                    rotatedHDiff = initH - settings.minHeight;
                                }
                            } else {
                                newH = initH + rotatedHDiff;
                                if (newH < settings.minHeight) {
                                    newH = settings.minHeight;
                                    rotatedHDiff = settings.minHeight - initH;
                                }
                            }
                            newW = newH * initW / initH;
                        }
                    } else {
                        if (xResize) {
                            if (left) {
                                newW = initW - rotatedWDiff;
                                if (newW < settings.minWidth) {
                                    newW = settings.minWidth;
                                    rotatedWDiff = initW - settings.minWidth;
                                }
                            } else {
                                newW = initW + rotatedWDiff;
                                if (newW < settings.minWidth) {
                                    newW = settings.minWidth;
                                    rotatedWDiff = settings.minWidth - initW;
                                }
                            }
                            newX += 0.5 * rotatedWDiff * cosFraction;
                            newY += 0.5 * rotatedWDiff * sinFraction;
                        }
    
                        if (yResize) {
                            if (top) {
                                newH = initH - rotatedHDiff;
                                if (newH < settings.minHeight) {
                                    newH = settings.minHeight;
                                    rotatedHDiff = initH - settings.minHeight;
                                }
                            } else {
                                newH = initH + rotatedHDiff;
                                if (newH < settings.minHeight) {
                                    newH = settings.minHeight;
                                    rotatedHDiff = settings.minHeight - initH;
                                }
                            }
                            newX -= 0.5 * rotatedHDiff * sinFraction;
                            newY += 0.5 * rotatedHDiff * cosFraction;
                        }
                    }


                    resize(newW, newH);
                    repositionElement(newX, newY);
                }

                // window addEventListener
                window.addEventListener('mousemove', eventMoveHandler, false);
                window.addEventListener('mouseup', function eventEndHandler() {
                    window.removeEventListener('mousemove', eventMoveHandler, false);
                    window.removeEventListener('mouseup', eventEndHandler);
                }, false);
            }

            function rotate(event) {
                initX = box.offsetLeft;             // <=
                initY = box.offsetTop;              // <=
                mousePressX = event.clientX;
                mousePressY = event.clientY;

                const arrowRects = box.getBoundingClientRect();
                const arrowX = arrowRects.left + arrowRects.width / 2;
                const arrowY = arrowRects.top + arrowRects.height / 2;

                function eventMoveHandler(event) {
                    const angle = Math.atan2(event.clientY - arrowY, event.clientX - arrowX) + Math.PI / 2;
                    rotateBox(angle * 180 / Math.PI);
                }

                window.addEventListener('mousemove', eventMoveHandler, false);
                window.addEventListener('mouseup', function eventEndHandler() {
                    window.removeEventListener('mousemove', eventMoveHandler, false);
                    window.removeEventListener('mouseup', eventEndHandler);
                }, false);
            }

            function editingStyle(event) {
                $('.' + settings.handlerClass).hide();
                $(box).css({
                    'z-index': getComputedStyle(document.body).getPropertyValue('--zi-' + $(box).data('id')), 
                    'border': 'none'
                });      // <= <=

                if ($(event.target).hasClass(settings.boxSelector)) {
                    $(event.target).find('.' + settings.handlerClass).show();
                    $(event.target).css({
                        'z-index': '100',
                        'border': 'dashed 1px #1aae9f'
                    });         // <=
                } else if ($(event.target).hasClass(settings.handlerClass)) {
                    $(event.target).show();
                    $(event.target).siblings('.' + settings.handlerClass).show();
                    $(event.target).parents('.' + settings.boxSelector).css({
                        'z-index': '100',
                        'border': 'dashed 1px #1aae9f'
                    });         // <=
                }

                if (!settings.resize) {
                    $($(event.target).parents().find('.' + settings.handlerClass + '.resize').hide());
                }
                if (!settings.rotate) {
                    $($(event.target).parents().find('.' + settings.handlerClass + '.rotate').hide());
                }

            }

            // custom code
            function removeHandler(event) {
                $(box).parents().find('.mockup-design-over').remove();
                $(syncEle).remove();
                $('.upload-design').show();
                $('.upload-design .upload-file').get(0).value = '';
                // 
                mockupParams[$('.mockup-tab.active').data('id')] = '';
            }

            function deleteKeyboardHandler(event) {
                if (event.key === "Delete") {
                    removeHandler(event);
                }
            }

            // listeners
            if (settings.move) {
                box.addEventListener('mousedown', function (event) { return dragSupport(event); }, false);
            }

            if (settings.resize) {
                hLeftTop.mousedown(function (event) { return resizeHandler(event, true, true, true, true); });
                hLeftMid.mousedown(function (event) { return resizeHandler(event, true, false, true, false); });
                hLeftBot.mousedown(function (event) { return resizeHandler(event, true, false, true, true); });
                hCenterTop.mousedown(function (event) { return resizeHandler(event, false, true, false, true); });
                hCenterBot.mousedown(function (event) { return resizeHandler(event, false, false, false, true); });
                hRightTop.mousedown(function (event) { return resizeHandler(event, false, true, true, true); });
                hRightMid.mousedown(function (event) { return resizeHandler(event, false, false, true, false); });
                hRightBot.mousedown(function (event) { return resizeHandler(event, false, false, true, true); });
            }

            if (settings.rotate) {
                hRotate.get(0).addEventListener('mousedown', function (event) { return rotate(event); }, false);
            }

            if (settings.remove) {
                hRightTopRemove.get(0).addEventListener('click', function (event) { return removeHandler(event); }, false);
                window.addEventListener('keyup', function (event) { return deleteKeyboardHandler(event); }, false);
            }

            $(document).mousedown(function (event) { return editingStyle(event); });

        });

    };
}(jQuery));