var w = floaty.rawWindow(
  <frame>
    <button id="innerBtn" text="拖动我" textSize="14" w="*" h="*" />
  </frame>
);

w.setPosition(0, 0);
w.setSize(200, 200)



let touchX, touchY, startX, startY

const sendLog = (text) => {
  events.broadcast.emit("log", '坐标：' + text);
}


w.innerBtn.setOnTouchListener(new android.view.View.OnTouchListener({
  onTouch: function (view, event) {
    switch (event.getAction()) {
      case android.view.MotionEvent.ACTION_DOWN:
        // 当按钮被按下时触发
        touchX = event.getRawX();
        touchY = event.getRawY();
        startX = w.getX();
        startY = w.getY();
        return true;
      case android.view.MotionEvent.ACTION_UP:
        // 当按钮被释放时触发
        var offsetX = event.getRawX() - touchX;
        var offsetY = event.getRawY() - touchY;
        // 更新悬浮窗位置
        w.setPosition(startX + offsetX, startY + offsetY);
        var intX = parseInt(startX + offsetX + w.getWidth() / 2);
        var intY = parseInt(startY + offsetY + w.getHeight() / 2);
        w.innerBtn.setText(intX + ',\n' + intY)
        sendLog('position: ' + intX + ',' + intY)
        setClip(intX + ',' + intY);
        toast('已复制')
        return true;
      case android.view.MotionEvent.ACTION_UP:
        return true;
    }
    return true;
  }
}));

w.exitOnClose();
while (true) {
  sleep(1000);
}

