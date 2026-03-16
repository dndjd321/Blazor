// wwwroot/yugioh.js 파일 내용

window.detectRealImageLoad = (realImageUrl, dotnetHelper) => {
    if (!realImageUrl) {
        dotnetHelper.invokeMethodAsync('OnRealImageError', realImageUrl);
        return;
    }

    const img = new Image();

    // 💡 이미지 로드 완료 시 Blazor 컴포넌트 메서드 호출
    img.onload = () => {
        dotnetHelper.invokeMethodAsync('OnRealImageLoaded', realImageUrl);
    };

    // 이미지 로드 실패 시 Blazor 컴포넌트 메서드 호출
    img.onerror = () => {
        dotnetHelper.invokeMethodAsync('OnRealImageError', realImageUrl);
    };

    // 이미지 이미 캐시/로드된 경우 onload가 즉시 트리거되지 않으므로 complete 속성 확인
    if (img.complete) {
        dotnetHelper.invokeMethodAsync('OnRealImageLoaded', realImageUrl);
        return;
    }

    img.src = realImageUrl; // 이미지 다운로드 시작
};