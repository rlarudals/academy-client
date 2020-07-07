import React from "react";
import Lnb from "../components/Lnb";
import axios from "axios";

class ACSC02 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      startDate: "",
      endDate: "",

      file: null,
      filename: "-",
    };
  }

  componentDidMount = async () => {
    //await axios.get(
    //"http://localhost:5000/api/testREST",
    // {},
    // {
    //  headers: {
    //  "Content-Type": "application/json",
    //  },
    // }
    //  );

    const inputData = {
      name: "김경민",
      age: 17,
      gender: "여성",
    };

    await axios.post(
      "http://localhost:5000/api/dataTest",
      {
        params: inputData,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  };

  render() {
    const { startDate, endDate, filename } = this.state;
    return (
      <div className="ACSC02">
        <Lnb title="Info" column="Home - Info" link="/" />

        <div className="dateBox">
          <div className="dateBox__col1">
            <div>시작일</div>
            <input
              type="date"
              name="startDate"
              value={startDate}
              onChange={this._dateChangeHandler}
            />
          </div>
          <div className="dateBox__col2">
            <div>~</div>
          </div>
          <div className="dateBox__col3">
            <div>종료일</div>
            <input
              type="date"
              name="endDate"
              value={endDate}
              onChange={this._dateChangeHandler}
            />
            <button onClick={this._checkDate}>확인</button>
          </div>
        </div>
        <div className="fileBox">
          <input
            className="inputFile"
            id="inputFile"
            type="file"
            onChange={this._fileChangeHandler}
          />
          <div>{filename}</div>
          <label className="fileBox__lb" htmlFor="inputFile">
            파일업로드
          </label>

          <button onClick={this._sendFileHandler}>백엔드로 파일 전송</button>
        </div>
      </div>
    );
  }

  _dateChangeHandler = (event) => {
    let nextState = {};
    nextState[event.target.name] = event.target.value;
    this.setState(nextState);
  };

  _checkDate = () => {
    const { startDate, endDate } = this.state;
    console.log(`${startDate}부터 ${endDate}까지 조회`);
  };

  _fileChangeHandler = (event) => {
    const file = event.target.files[0];

    console.log(file.name);
    this.setState({
      filename: file.name,
      file: file,
    });
  };

  _sendFileHandler = async () => {
    //1. 현재 업로드 된 파일을 가져온다
    const { file } = this.state;
    //2. 파일이 널이라면 함수를 중단!!
    if (file === null) {
      alert("파일없으니까파일데려와..");
      return;
    }
    //3. 폼태그 만들어
    let form = new FormData();
    //4. 폼태그에 파일 넣어
    form.append("uploadFile", file);
    //5. 악시오스..axios를 통해 서버로 전송 1 url 2 뭘전송할건데 (꼭제이슨아니야도됨 폼이어도됨 허용해줫음) 3 어떤 형식으러 보낼겨 어떤유형.
    await axios.post("http://localhost:5000/api/fileUpload", form, {
      headers: {
        "Context-Type": "multipart/form-data",
      },
    });
  };
}
export default ACSC02;
// 앞에 잇는 년은 키 값이고 뒤에 잇는 년은 현재 event 에서 가지고 앗는거
