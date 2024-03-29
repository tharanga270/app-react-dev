import './App.css';

const user1 = {
  avatar:
    'https://hips.hearstapps.com/hmg-prod/images/gettyimages-648731684.jpg?crop=1xw:1.0xh;center,top&resize=640:*',
  name: 'Samantha Gamage',
  designation: 'Java Developer',
  salary: '35600',
};
const user2 = {
  avatar:
    'https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcR5UWwxg_bIq4Mq0rBH_eIvKl9GjHazcawSyVQiBxmyAH0Z3_CWxIb6b0t1q2N3MuUrqBbLSb20p_7NS3g',
  name: 'Chathurika Sewwandi',
  designation: 'Angular Developer',
  salary: '45000',
};
const user3 = {
  avatar:
    'https://images.cdn.yle.fi/image/upload/c_crop,h_2723,w_4841,x_1,y_243/ar_1.7777777777777777,c_fill,g_faces,h_1012,w_1800/dpr_2.0/q_auto:eco/f_auto/fl_lossy/v1674636844/39-106360463d0eaeb9cbfa',
  name: 'Wasantha Nanayakkara',
  designation: 'Php Developer',
  salary: '75300',
};
const user4 = {
  avatar:
    'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSqYOAcfRptITLKuIIQQfTmwEGuKRyLV-kXPkaCC7aIFZ9aZ2C-emDElQzLF8zQ7e_CHRH3bg',
  name: 'Ashen Sandeepa',
  designation: 'React Developer',
  salary: '95700',
};

function UserManager() {
  return (
    <div className="wrapper">
      <User
        avatar={user1.avatar}
        name={user1.name}
        designation={user1.designation}
        salary={user1.salary}
      />
      <User
        avatar={user2.avatar}
        name={user2.name}
        designation={user2.designation}
        salary={user2.salary}
      />
      <User
        avatar={user3.avatar}
        name={user3.name}
        designation={user3.designation}
        salary={user3.salary}
      />
      <User
        avatar={user4.avatar}
        name={user4.name}
        designation={user4.designation}
        salary={user4.salary}
      />
    </div>
  );
}

const User = (props) => {
  const { avatar, name, designation, salary } = props;
  return (
    <div className="user-outer">
      <Avatar avatar={avatar} />
      <UserData name={name} designation={designation} salary={salary}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus soluta
        sint id veniam consequuntur totam quaerat iusto deserunt cupiditate,
        velit iste quia sapiente nisi enim.
      </UserData>
    </div>
  );
};

const Avatar = ({ avatar }) => {
  return (
    <div className="avatar-outer">
      <img src={avatar} alt="Samuel L. Jackson" />
    </div>
  );
};

const UserData = ({ name, designation, salary, children }) => {
  console.log(children);
  return (
    <div className="user-data">
      <UserName name={name} />
      <Designation designation={designation} />
      <Salary salary={salary} />
      <p>
        {children}
      </p>
    </div>
  );
};

// const UserName = (props) => {
//   const inlineStyle = {
//     color: '#2980b9',
//   };
//   return <h1 style={inlineStyle}>{props.name}</h1>;
// };

const UserName = ({ name }) => {
  const inlineStyle = {
    color: '#2980b9',
  };
  return <h1 style={inlineStyle}>{name}</h1>;
};
const Designation = ({ designation }) => {
  return <h3 style={{ fontStyle: 'italic' }}>{designation}</h3>;
};

const Salary = ({ salary }) => {
  return <h3 style={{ fontStyle: 'italic' }}>{salary}</h3>;
};

export default UserManager;
