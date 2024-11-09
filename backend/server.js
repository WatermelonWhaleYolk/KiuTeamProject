const express = require("express");
const app = express();
/* 미들 웨어 */
const bodyParser = require("body-parser");
const path = require("path");
/* 마리아DB 연결*/
const mariadb = require("./maria_db");
/* 포트 설정 */
port = 3000;
/* 프론트엔드 정적 파일 제공 */
app.use(express.static(path.join(__dirname, "../frontend/build")));
/* 바디파서 사용*/
app.use(bodyParser.urlencoded({ extended: false }));

app.post("/user_db", async (req, res) => {
  const {
    user_id,
    user_password,
    user_first_name,
    user_last_name,
    user_birthday,
    user_email,
    user_email_domain,
  } = req.body;

  let maria_db_connect;
  try {
    maria_db_connect = await mariadb.getConnection();
    const insert_into =
      "insert into user_db (user_id, user_password, user_first_name, user_last_name, user_birthday, user_email, user_email_domain) VALUES (?, ?, ?, ?, ?, ?, ?)";
    const values = [
      user_id,
      user_password,
      user_first_name,
      user_last_name,
      user_birthday,
      user_email,
      user_email_domain,
    ];
    await maria_db_connect.query(insert_into, values);
    console.log("데이터가 DB로 전송되었습니다.");
  } catch (error) {
    console.log("데이터를 저장하는 중 오류가 발생했습니다", error);
    res.status(500).send("데이터 저장 오류");
  } finally {
    if (maria_db_connect) maria_db_connect.release();
  }
});

app.listen(3000, () => {
  console.log(`localhost:${port}/ 에서 서버 실행 중입니다.`);
});
