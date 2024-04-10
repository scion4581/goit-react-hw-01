import Profile from './Profile';
import userData from '../data/userData.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';
import FriendList from './FriendList';
import TransactionHistory from './TransactionHistory';

export default function App() {
  return (
    <div>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
