// BEGIN
let getAllFriendsUser = (user) => user.getFriends();

let getAllIdFriendsUser = (user) => getAllFriendsUser(user).map(el => el.id);

export let getMutualFriends = (user1, user2) => {
    let [user1Idsfriends, user2friends] = [getAllIdFriendsUser(user1), getAllFriendsUser(user2)];
    let user2Idsfriends = getAllIdFriendsUser(user2);
    let MutualFriends = [];
    for (let i = 0; i != user1Idsfriends.length; i++)
        user1Idsfriends.includes(user2Idsfriends[i]) && MutualFriends.push(user2friends[i]);
    return MutualFriends;
};
// END

export default ({ id = null, friends = [] } = {}) => ({
    friends,
    id,
    getFriends() {
        return this.friends.slice(); // возвращение копии массива, чтобы его не изменили извне
    },
});