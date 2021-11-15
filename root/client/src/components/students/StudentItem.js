import Card from '../ui/Card'

function StudentItem(props) {
  return (
    <li>
      <Card>
        <div>
          <h3>{props.id}</h3>
          <h3>{props.fullName}</h3>
          <h3>{props.username}</h3>
          <h3>{props.email}</h3>
        </div>
      </Card>
    </li>
  );
}

export default StudentItem;
