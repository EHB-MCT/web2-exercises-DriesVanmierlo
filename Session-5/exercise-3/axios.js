import axios from 'axios';
import {
    count
} from 'console';
import * as fs from 'fs/promises';

let response = await axios.get('https://jsonplaceholder.typicode.com/comments');
let emails = {
    count: 0,
    list: []
}

for (let comment of response.data) {
    emails.list.push(comment.email);
    emails.count++
}

await fs.appendFile('emails.json', JSON.stringify(emails))