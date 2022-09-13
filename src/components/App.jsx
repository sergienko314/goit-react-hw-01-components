import { Profile } from './Profile';
import { Statistics } from './Statistics/Statistics';
import  Friends  from './Friends/Friends';
import Transactions from './Transactions/Transactions';

import user from '../data/user.json';
import statistics from "../data/data.json"
import friends from "../data/friends.json"
import transactions from "../data/transactions.json"


export const App = () => {
  return (
    <div
      style={{
        width: '2400px',
        height: '1300px',
        display: 'flex',
        gap:40,
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers= {user.stats.followers}
        views = { user.stats.views}
        likes = { user.stats.likes}
      />
      <Statistics data={statistics}
        title="Upload stats" />
      <Friends friends={friends} />
      <Transactions transactions={transactions}/>
    </div>
  );
};
