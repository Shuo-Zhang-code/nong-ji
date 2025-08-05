document.addEventListener('DOMContentLoaded', function() {
    console.log('农机展示系统主界面已加载');
    
    // 添加点击动画效果
    const cards = document.querySelectorAll('.machine-card');
    cards.forEach(card => {
        card.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 200);
        });
    });
});