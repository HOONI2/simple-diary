import React, { useContext } from "react";
import DiaryItem from "./DiaryItem";
import { DiaryStateContext } from "./App";

function DiaryList() {
  const diaryList = useContext(DiaryStateContext);

  return (
    <div className="DiaryList">
      <h2>일기 리스트</h2>
      <h4>{diaryList.length}개의 일기가 있다!</h4>
      {diaryList.map((it) => (
        <DiaryItem key={it.id} {...it} />
      ))}
    </div>
  );
}

DiaryList.defaultProps = {
  diaryList: [],
};

export default DiaryList;
