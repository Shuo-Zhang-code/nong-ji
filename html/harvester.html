// 部件信息（含图片路径和音频路径）
const partsInfo = {
    engine: {
        name: "大豆切割-传输装置",
        description: "1. 拨禾轮：拨禾轮一定的转速旋转，保障作物流顺利进入螺旋扒指式输送器进而进入割台内部。\n2.切割装置：切割器采用摆环驱动机构，带动动刀片在定刀片间做往复运动，有效切割拨禾轮喂入的大豆茎秆。\n3. 大豆螺旋输送器：采用螺旋扒指式设计，可靠收集已切割的大豆茎秆，并平稳输送至中间输送器进行后续脱粒清选作业。",
        image: "../images/soybean.png",
        audio: "../audio/soybean.mp3",
    },
    tire: {
        name: "大豆处理装置",
        description: "1. 钉齿式脱粒滚：使用斜面刀齿和栅格式凹板组合，在减少大豆籽粒损伤的前提下进行茎秆再切割和大豆初步脱粒。\n2. 纵轴流凹板：纵轴流凹板是收割机脱粒核心部件，通过滚筒旋转快速脱粒并分离谷物和杂质，提高效率同时减少碎粒。\n3.钉齿式单纵轴流:喂入搅龙的螺旋叶片升角对大豆作物轴向输送以及避免滚筒堵塞有重要影响。\n4.大豆清洁装置:大豆籽粒和部分大豆秸秆、豆英等落在抖动板及上筛筛面上，在曲柄连杆的抖动作用下，清选筛和抖动板做往复运动将物料不断推送至鱼鳞筛处，在风机气流及清选筛振动作用下进行清选。",

        image: "../images/Soybean-cleaning.png",
        audio: "../audio/Soybean-cleaning.mp3",
    },
    steering: {
        name: "玉米切割-传输装置",
        description: "1.切割装置：玉米切割装置是用于切断玉米茎秆、分离果穗或切碎秸秆的农机部件，具有高效、省力的特点，广泛用于收获、青贮和秸秆处理等作业。\n2. 输送装置：输送装置是用于将切割后的玉米茎秆、果穗或切碎的秸秆从切割装置输送到下一个处理环节的设备，通常包括螺旋输送器、链条输送机等。",

        image: "../images/corn-cleaning.png",
        audio: "../audio/corn-cleaning.mp3",
    },
    transmission: {
        name: "玉米处理装置",
        description: "1.苞叶滑板：引导物料进入处理区的通道 。\n2.剥皮辊下辊：配合上辊，通过转动剥离物料苞叶 。\n3.剥皮辊上辊：与下辊协同，借摩擦力剥离物料苞叶 。\n4.星轮式压送器：转动挤压，推送物料通过加工区 。\n5.方轴：传递扭矩，带动部件转动，提供动力 。\n6.方轴轴承：支撑方轴、减摩，承受载荷保运转 。\n7.剥皮装置机架：安装固定各部件的基础支撑结构 。",

        image: "../images/corn.png",
        audio: "../audio/corn.mp3",
    }
};

// 当前播放的音频对象
let currentAudio = null;

// 播放录音函数
function playAudio(partId) {
    const info = partsInfo[partId];
    if (!info || !info.audio) return;

    stopAudio();  // 先停止前一个音频

    currentAudio = new Audio(info.audio);
    currentAudio.play();
}

// 停止录音函数
function stopAudio() {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
        currentAudio = null;
    }
}

// 返回按钮功能
function goBack() {
    stopAudio();
    window.history.back();
}

// 显示部件信息
function showPartInfo(partId) {
    const info = partsInfo[partId];
    if (!info) return;

    stopAudio(); // 停止正在播放的音频

    // 更新文本信息
    document.getElementById('part-name').textContent = info.name;
    document.getElementById('part-description').textContent = info.description;

    // 更新图片
    const img = document.getElementById('part-image');
    if (img) {
        img.src = info.image;
        img.alt = info.name;
        img.style.display = 'block';
    }

    // 播放对应录音
    playAudio(partId);
}

// 设置点击事件
function setupEventListeners() {
    document.querySelectorAll('.parts-list li').forEach(item => {
        item.addEventListener('click', () => {
            const partId = item.dataset.part;
            showPartInfo(partId);
        });
    });
}

// 页面加载后初始化
window.addEventListener('DOMContentLoaded', () => {
    setupEventListeners();
    window.addEventListener('beforeunload', stopAudio);  // 页面关闭时停止播放
});
