document.addEventListener('DOMContentLoaded', function() {
  var copyAddressButton = document.getElementById('copyAddressButton');
  var callGroom = document.getElementById('callGroom');
  var callBride = document.getElementById('callBride');
  var copyGroomBank = document.getElementById('copyGroomBank');
  var copyGroomFatherBank = document.getElementById('copyGroomFatherBank');
  var copyGroomMotherBank = document.getElementById('copyGroomMotherBank');
  var copyBrideBank = document.getElementById('copyBrideBank');
  var copyBrideFatherBank = document.getElementById('copyBrideFatherBank');
  var copyBrideMotherBank = document.getElementById('copyBrideMotherBank');
  var viewPhoto = document.getElementById('viewPhoto');
  var commentWrite = document.getElementById('commentWrite');

  if (copyAddressButton) {
    copyAddressButton.addEventListener('click', function() {
      gtag('event', 'copy_address', {
        'event_category': 'copy_address',
        'event_label': '주소 복사 버튼 클릭'
      });
    });
  }

  if (callGroom) {
    callGroom.addEventListener('click', function() {
      gtag('event', 'call_groom', {
        'event_category': 'copy_call',
        'event_label': '신랑 전화 버튼 클릭'
      });
    });
  }

  if (callBride) {
    callBride.addEventListener('click', function() {
      gtag('event', 'call_bride', {
        'event_category': 'copy_call',
        'event_label': '신부 전화 버튼 클릭'
      });
    });
  }

  if (copyGroomBank) {
    copyGroomBank.addEventListener('click', function() {
      gtag('event', 'copy_groom_bank', {
        'event_category': 'copy_bank',
        'event_label': '신랑 계좌 복사 버튼 클릭'
      });
    });
  }
  if (copyGroomFatherBank) {
    copyGroomFatherBank.addEventListener('click', function() {
      gtag('event', 'copy_groom_father_bank', {
        'event_category': 'copy_bank',
        'event_label': '신부 부 계좌 복사 버튼 클릭'
      });
    });
  }
  if (copyGroomMotherBank) {
    copyGroomMotherBank.addEventListener('click', function() {
      gtag('event', 'copy_groom_mother_bank', {
        'event_category': 'copy_bank',
        'event_label': '신부 모 계좌 복사 버튼 클릭'
      });
    });
  }
  if (copyBrideBank) {
    copyBrideBank.addEventListener('click', function() {
      gtag('event', 'copy_bride_bank', {
        'event_category': 'copy_bank',
        'event_label': '신부 계좌 복사 버튼 클릭'
      });
    });
  }
  if (copyBrideFatherBank) {
    copyBrideFatherBank.addEventListener('click', function() {
      gtag('event', 'copy_bride_father_bank', {
        'event_category': 'copy_bank',
        'event_label': '신부 부 계좌 복사 버튼 클릭'
      });
    });
  }
  if (copyBrideMotherBank) {
    copyBrideMotherBank.addEventListener('click', function() {
      gtag('event', 'copy_bride_mother_bank', {
        'event_category': 'copy_bank',
        'event_label': '신부 모 계좌 복사 버튼 클릭'
      });
    });
  }

  if (viewPhoto) {
    viewPhoto.addEventListener('click', function() {
      gtag('event', 'view_photo', {
        'event_category': 'view_photo',
        'event_label': '사진 보기'
      });
    });
  }

  if (commentWrite) {
    commentWrite.addEventListener('click', function() {
      gtag('event', 'comment_write', {
        'event_category': 'comment_write',
        'event_label': '방명록 작성'
      });
    });
  }
});
