import React, { useState } from 'react'; // 引入 React 核心與 useState Hook

const App = () => {
  // 1. 定義狀態變數 (State)
  // isOn: 目前按鈕的狀態 (true 代表開啟/紅色，false 代表關閉/綠色)
  // setIsOn: 用來更新狀態的函式
  // useState(false): 設定初始狀態為 false (即 OFF/綠色)
  const [isOn, setIsOn] = useState(false);

  // 2. 定義點擊事件處理函式
  const handleClick = () => {
    // 使用 !isOn 將布林值反轉
    // 如果現在是 true 就變成 false，如果是 false 就變成 true
    setIsOn(!isOn);
  };

  // 3. 定義外層容器樣式 (負責排版)
  const containerStyle = {
    width: '100%',               // 設定寬度佔滿父元素的 100%
    height: '100vh',             // 設定高度為 100% 視窗高度 (Viewport Height)
    display: 'flex',             // 啟用 Flexbox 彈性佈局模型
    justifyContent: 'center',    // 水平軸置中 (左右置中)
    alignItems: 'center',        // 交叉軸置中 (垂直置中)
    backgroundColor: '#f5f5f5'   // (選用) 設定淺灰背景色，讓按鈕更明顯
  };

  // 4. 定義按鈕樣式 (負責外觀)
  const buttonStyle = {
    // 使用三元運算子 (條件 ? 值1 : 值2) 決定背景色
    // 如果 isOn 為 true 則顯示紅色，否則顯示綠色
    backgroundColor: isOn ? 'red' : 'green',
    
    color: 'white',              // 文字顏色設為白色
    padding: '15px 30px',        // 內距：上下 15px，左右 30px (讓按鈕大一點)
    fontSize: '20px',            // 字體大小
    border: 'none',              // 移除預設邊框
    borderRadius: '8px',         // 設定圓角，讓按鈕看起來比較圓滑
    cursor: 'pointer',           // 滑鼠游標移上去時變成手指形狀
    transition: 'all 0.3s ease'  // CSS 轉場：讓顏色改變時有 0.3 秒的平滑動畫
  };

  return (
    // 渲染外層容器
    <div style={containerStyle}>
      {/* 渲染按鈕 */}
      {/*onClick 綁定點擊事件，觸發 handleClick*/}
      <button style={buttonStyle} onClick={handleClick}>
        {/* 根據 isOn 狀態動態顯示文字 */}
        {/* 如果 isOn 為 true 顯示 'ON'，否則顯示 'OFF' */}
        {isOn ? 'ON' : 'OFF'}
      </button>
    </div>
  );
};

export default App;