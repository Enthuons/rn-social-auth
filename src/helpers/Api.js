import AsyncStorage from '@react-native-community/async-storage';
import { Actions } from 'react-native-router-flux';

export async function signup(email, password, name) {
    let users = await AsyncStorage.getItem('users');
    if (users) {
        users = JSON.parse(users);
    } else {
        users = [];
    }

    const existingUsers = users.filter((user) => {
        if (user.email === email) {
            return true;
        }
        return false;
    });

    if (existingUsers.length > 0) {
        alert('email already exist');
        return;
    }

    users.push({ name, email, password });
    AsyncStorage.setItem('users', JSON.stringify(users));

    alert("You are successfully registered ");
    Actions.login({type: 'reset'});
}

export async function login(email, password) {
    let users = await AsyncStorage.getItem('users');
    if (users) {
        users = JSON.parse(users);
    } else {
        users = [];
    }

    const existingUsers = users.filter((user) => {
        if (user.email === email && user.password === password) {
            return true;
        }
        return false;
    });

    if (existingUsers.length <= 0) {
        alert('wrong email or password');
        return;
    }

    const user = existingUsers[0];
    AsyncStorage.setItem('user', JSON.stringify(user));

    alert("you are logged in as " + user.name);
    Actions.auth({ type: 'reset'});
}

