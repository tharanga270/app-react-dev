import './App.css';

function UserManager() {
  return (
    <div className="wrapper">
      <User />
      <User />
      <User />
      <User />
    </div>
  );
}

const User = () => {
  return (
    <div className="user-outer">
      <Avatar />
      <UserData />
    </div>
  );
};

const Avatar = () => {
  return (
    <div className="avatar-outer">
      <img
        src="https://hips.hearstapps.com/hmg-prod/images/gettyimages-648731684.jpg?crop=1xw:1.0xh;center,top&resize=640:*"
        alt="Samuel L. Jackson"
      />
    </div>
  );
};

const UserData = () => {
  return (
    <div className="user-data">
      <UserName />
      <Designation />
      <Salary />
    </div>
  );
};

const UserName = () => {
  return <h1 style={{ color: "red" }}>Kmal Samantha</h1>;
};
const Designation = () => {
  return <h3>Java Developer</h3>;
};
const Salary = () => {
  return <h3>15000</h3>;
};

export default UserManager;
