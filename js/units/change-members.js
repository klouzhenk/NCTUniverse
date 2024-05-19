const membersChangeBtns = document.querySelectorAll('.members--section-list-btn');
const memberInfoBlocks = document.querySelectorAll('.member-info');
let currMemberIndex = 0;
const membersChangeBtnsArr = [...membersChangeBtns];

const showMemberInfo = (e) => {
    // console.log(e.target);
    membersChangeBtns[currMemberIndex].classList.remove('active-member');
    memberInfoBlocks[currMemberIndex].classList.remove('active-member-info');
    let element;
    e.target.classList.contains('members--section-list-btn') ? element = e.target : element = e.target.closest('.members--section-list-btn');
    console.log(element);
    currMemberIndex = membersChangeBtnsArr.indexOf(element);
    membersChangeBtns[currMemberIndex].classList.add('active-member');
    memberInfoBlocks[currMemberIndex].classList.add('active-member-info');
}

membersChangeBtns.forEach(btn => btn.addEventListener('click', showMemberInfo));