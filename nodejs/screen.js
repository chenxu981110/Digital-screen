
const express = require('express');
var mysql = require('mysql');
const app = express();

app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');

    if (req.method == 'OPTIONS') {
        res.send(200); /*让options请求快速返回*/
    }
    else {
        next();
    }
});




//活性炭的生产指标
app.put('/chart1/:id/:production', function (req, res) {
    const id = req.params["id"];
    const production = req.params["production"];

    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'cx19981110.',
        port: '3306',
        database: 'screen'
    });

    connection.connect();

    let sql = 'INSERT INTO chart1 values(\'' + id + '\', ' + Date.now() + ',' + production + ')';
    console.log(sql);
    const updateCallback = function (err, result) {
        if (err) {
            console.log('[UPDATE ERROR] - ', err.message);
            res.send('修改失败！');
            return;
        }
        res.send({ id: id, status: 'success' });
        connection.end();
    };
    connection.query(sql, updateCallback);
});
app.get('/chart1/:id/:count', function (req, res) {
    const id = req.params["id"];
    const count = req.params["count"];
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'cx19981110.',
        port: '3306',
        database: 'screen'
    });

    connection.connect();
    var sql = "select * from chart1 WHERE id='" + id + "' order by time desc limit " + count;
    connection.query(sql, function (err, result) {
        if (err) {
            console.log('[SELECT ERROR] - ', err.message);
            res.send(JSON.stringify({
                succ: false,
                msg: '查询失败!'
            }));
            return;
        }

        const resp = {
            id: id,
            data1: result
        };
        res.send(JSON.stringify(resp));
    });
    connection.end();
});

/*
app.get('/chart1/:time/:production', function (req, res) {
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'cx19981110.',
        database: 'screen'
    });
    connection.connect();
    connection.query('select * from chart1', function (err, data) {
        if (err) throw err;
        var time = [];
        var production = [];
        for (var i = 0; i < data.length; i++) {
            time[i] = (data[i].time).toString();
            production[i] = data[i].production;
        }
        res.render('../screen', {
            time: time,
            production: production
        });

    });

});
*/






//活性炭的各项经营指标
app.put('/chart2/:id/:yusuan/:firstHalf/:secondHalf', function (req, res) {
    const id = req.params["id"];
    const yusuan = req.params["yusuan"];
    const firstHalf = req.params["firstHalf"];
    const secondHalf = req.params["secondHalf"];

    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'cx19981110.',
        port: '3306',
        database: 'screen'
    });

    connection.connect();

    let sql = 'INSERT INTO chart2 values(\'' + id + '\', ' + Date.now() + ',' + yusuan + ',' + firstHalf + ',' + secondHalf + ')';
    console.log(sql);
    const updateCallback = function (err, result) {
        if (err) {
            console.log('[UPDATE ERROR] - ', err.message);
            res.send('修改失败！');
            return;
        }
        res.send({ id: id, status: 'success' });
        connection.end();
    };
    connection.query(sql, updateCallback);
});
app.get('/chart2/:id/:count', function (req, res1) {
    const id = req.params["id"];
    const count = req.params["count"];
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'cx19981110.',
        port: '3306',
        database: 'screen'
    });

    connection.connect();
    var sql = "select * from chart2 WHERE id='" + id + "' order by time desc limit " + count;
    connection.query(sql, function (err, result1) {
        if (err) {
            console.log('[SELECT ERROR] - ', err.message);
            res1.send(JSON.stringify({
                succ: false,
                msg: '查询失败!'
            }));
            return;
        }

        const resp1 = {
            id: id,
            data2: result1
        };
        res1.send(JSON.stringify(resp1));
    });
    connection.end();
});

//活性炭的生产运行负荷率
app.put('/chart3/:id/:work', function (req, res) {
    const id = req.params["id"];
    const work = req.params["work"];


    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'cx19981110.',
        port: '3306',
        database: 'screen'
    });

    connection.connect();

    let sql = 'INSERT INTO chart3 values(\'' + id + '\', ' + Date.now() + ',' + work + ')';
    console.log(sql);
    const updateCallback = function (err, result) {
        if (err) {
            console.log('[UPDATE ERROR] - ', err.message);
            res.send('修改失败！');
            return;
        }
        res.send({ id: id, status: 'success' });
        connection.end();
    };
    connection.query(sql, updateCallback);
});
app.get('/chart3/:id/:count', function (req, res1) {
    const id = req.params["id"];
    const count = req.params["count"];
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'cx19981110.',
        port: '3306',
        database: 'screen'
    });

    connection.connect();
    var sql = "select * from chart3 WHERE id='" + id + "' order by time desc limit " + count;
    connection.query(sql, function (err, result1) {
        if (err) {
            console.log('[SELECT ERROR] - ', err.message);
            res1.send(JSON.stringify({
                succ: false,
                msg: '查询失败!'
            }));
            return;
        }

        const resp1 = {
            id: id,
            data3: result1
        };
        res1.send(JSON.stringify(resp1));
    });
    connection.end();
});
//活性炭的煤进耗存
app.put('/chart4/:id/:save/:consumption/:enter', function (req, res) {
    const id = req.params["id"];
    const save = req.params["save"];
    const consumption = req.params["consumption"];
    const enter = req.params["enter"];

    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'cx19981110.',
        port: '3306',
        database: 'screen'
    });

    connection.connect();

    let sql = 'INSERT INTO chart4 values(\'' + id + '\', ' + Date.now() + ',' + save + ',' + consumption + ',' + enter + ')';
    console.log(sql);
    const updateCallback = function (err, result) {
        if (err) {
            console.log('[UPDATE ERROR] - ', err.message);
            res.send('修改失败！');
            return;
        }
        res.send({ id: id, status: 'success' });
        connection.end();
    };
    connection.query(sql, updateCallback);
});
app.get('/chart4/:id/:count', function (req, res1) {
    const id = req.params["id"];
    const count = req.params["count"];
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'cx19981110.',
        port: '3306',
        database: 'screen'
    });

    connection.connect();
    var sql = "select * from chart4 WHERE id='" + id + "' order by time desc limit " + count;
    connection.query(sql, function (err, result1) {
        if (err) {
            console.log('[SELECT ERROR] - ', err.message);
            res1.send(JSON.stringify({
                succ: false,
                msg: '查询失败!'
            }));
            return;
        }

        const resp1 = {
            id: id,
            data4: result1
        };
        res1.send(JSON.stringify(resp1));
    });
    connection.end();
});
//环保数据

app.put('/chart5/:id/:target/:complete', function (req, res) {
    const id = req.params["id"];
    const target = req.params["target"];
    const complete = req.params["complete"];


    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'cx19981110.',
        port: '3306',
        database: 'screen'
    });

    connection.connect();

    let sql = 'INSERT INTO chart5 values(\'' + id + '\', ' + Date.now() + ',' + target + ',' + complete + ')';
    console.log(sql);
    const updateCallback = function (err, result) {
        if (err) {
            console.log('[UPDATE ERROR] - ', err.message);
            res.send('修改失败！');
            return;
        }
        res.send({ id: id, status: 'success' });
        connection.end();
    };
    connection.query(sql, updateCallback);
});
app.get('/chart5/:id/:count', function (req, res1) {
    const id = req.params["id"];
    const count = req.params["count"];
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'cx19981110.',
        port: '3306',
        database: 'screen'
    });

    connection.connect();
    var sql = "select * from chart5 WHERE id='" + id + "' order by time desc limit " + count;
    connection.query(sql, function (err, result1) {
        if (err) {
            console.log('[SELECT ERROR] - ', err.message);
            res1.send(JSON.stringify({
                succ: false,
                msg: '查询失败!'
            }));
            return;
        }

        const resp1 = {
            id: id,
            data5: result1
        };
        res1.send(JSON.stringify(resp1));
    });
    connection.end();
});






















app.use(express.static('dist'))
app.listen(3000, () => console.log('Example app listening on port 3000!'));



