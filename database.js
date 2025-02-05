const express = require('express');
const { Client } = require('pg');

const app = express();
const port = 3000; 

const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "221B",
    database: "dbtest"
});

app.get('/', (req, res) => {
    client.connect()
        .then(() => client.query('SELECT * FROM users'))
        .then(result => {
            const users = result.rows;

            // 1. Build HTML dynamically
            let html = `<!DOCTYPE html>
            <html>
            <head>
                <title>Users</title>
            </head>
            <body>
                <h1>Users</h1>
                <table>
                    <thead>
                        <tr>`;

            
            if (users.length > 0) {
                for (const key in users[0]) {
                    html += `<th>${key}</th>`;
                }
            }

            html += `</tr>
                    </thead>
                    <tbody>`;

            users.forEach(user => {
                html += `<tr>`;
                for (const key in user) {
                    html += `<td>${user[key]}</td>`;
                }
                html += `</tr>`;
            });

            html += `</tbody>
                </table>
            </body>
            </html>`;

            res.send(html); 
        })
        .catch(err => {
            console.error("Error fetching users:", err);
            res.status(500).send('Error fetching data');
        })
        .finally(() => client.end());
});


app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});