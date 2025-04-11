// 「確認済みにする」ボタンを探す
const checkButton = document.querySelector('input[type="image"][name="action_FreePage_checkingstatusmod_check"][title="確認済みにする"]');

// ボタンが見つかればクリックする
if (checkButton) {
    checkButton.click();  // ボタンをクリック
    console.log("Button clicked");
} else {
    console.log("Button not found");
}
