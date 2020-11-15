import axios from 'axios';
import apiKeys from './apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const livingStudents = () =>
  new Promise((resolve, reject) => {
    axios
      .get(`${baseUrl}/livingpeople.json`)
      .then(response => {
        resolve(response.data);
      })
      .catch(error => reject(error));
  });

const dearlyBeloved = () =>
  new Promise((resolve, reject) => {
    axios
      .get(`${baseUrl}/deadpeople.json`)
      .then(response => {
        resolve(response.data);
      })
      .catch(error => reject(error));
  });

const followTheLight = () =>
  new Promise((resolve, reject) => {
    this.livingStudents()
      .then(response => {
        const theLiving = Object.values(response.data);
        const badLuck = Math.floor(Math.random() * theLiving.length() - 1);

        resolve(response.data);
      })
      .catch(error => reject(error));
  });

export default {
  livingStudents,
  dearlyBeloved,
  followTheLight
};
