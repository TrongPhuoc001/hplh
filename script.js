const send_btn = document.querySelector('#send-btn');
const pass_input = document.querySelector('#pass-input');
const content = document.querySelector('#content');
const test = document.querySelector('#test');
const true_content = document.querySelector('#true-content');
pass_input.addEventListener("keyup", (e) => {
    if (e.key === "Enter" || e.keyCode === 13) {
      send_btn.click();
    }
});
send_btn.addEventListener('click',()=>{
    if(pass_input.value === '08052001'){
        content.style.display = 'flex'
    }
})

const hong_btn = document.querySelector('#hong-btn');
let count = 0;
hong_btn.addEventListener('click',()=>{
    count++;
    const x = Math.random() * (200 - 1) + 1;
    const y = Math.random() * (200 - 1) + 1;
    hong_btn.style.transform = `translate(${x}px,${y}px)`;
})

const yes_btn = document.querySelector('#yes-btn');

yes_btn.addEventListener('click',()=>{
    if(count!=0){
        alert(`Hong tận ${count} lần cơ à :)))`);
    }
    else{
        alert(`Hehe tất nhiên òi đúng hemm :))`);
    }
    test.style.display = 'none';
    true_content.style.display = 'flex';
    guiLoichuc();
})

const loiChuc = [
  {
    content: "Sớm có bồ",
    anh: "ct1.jpg",
  },
  {
    content: "Giảm cân thành công",
    anh: "giamcan.jpg",
  },
  {
    content: "Điểm full A",
    anh: "fulla.jpg",
  },
  {
    content: "Hết trầm kảm",
    anh: "hettramcam.jpg",
  },
  {
    content: "Giàu có",
    anh: "giauco.jpg",
  },
  { 
    content: "Và cúi cùng là....",
    anh: "present.png",
  },
];
const chuc = document.querySelector("#chuc");
const and = document.querySelector('#anh');
async function guiLoichuc(){
    chuc.innerHTML = `<p>Gửi tới Hìn xinh đẹp 1 vài lời chúc từ tâm can Huyn nè :)))</p>`;
    for( const loi of loiChuc){
        await new Promise((resolve, reject) => {
            setTimeout(() => {
                chuc.innerHTML = `<p>${loi.content}</p>`;
                and.src = loi.anh;
                resolve();
            }, 2000);
        });
    }
    chuc.innerHTML = `<p>Happy birthday to Lê Hiền :)))</p>`;
    anh.style.display = "none";
    document.querySelector('#video').src = 'ct3.mp4';
    document.querySelector("#video").style.display = 'block';
    
}