// Function to enable drag-and-drop functionality
function makeDraggable() {
    const draggableItems = document.querySelectorAll('.draggable');
  
    draggableItems.forEach(item => {
      item.addEventListener('mousedown', startDrag);
    });
  
    function startDrag(e) {
      const item = e.target;
      let shiftX = e.clientX - item.getBoundingClientRect().left;
      let shiftY = e.clientY - item.getBoundingClientRect().top;
  
      item.style.position = 'absolute';
      item.style.zIndex = 1000;
      
      moveAt(e.pageX, e.pageY);
  
      function moveAt(pageX, pageY) {
        item.style.left = pageX - shiftX + 'px';
        item.style.top = pageY - shiftY + 'px';
      }
  
      function onMouseMove(e) {
        moveAt(e.pageX, e.pageY);
      }
  
      document.addEventListener('mousemove', onMouseMove);
  
      item.addEventListener('mouseup', () => {
        document.removeEventListener('mousemove', onMouseMove);
      });
    }
  }
  
  document.addEventListener('DOMContentLoaded', makeDraggable);
  