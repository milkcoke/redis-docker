import redis, {createClient} from 'redis';

const PORTS = [6379, 7000, 7100, 7200, 7300, 7400, 7500];


async function main1() {
    const client = createClient({
        // url: 'redis://localhost:' + PORTS[0],
        url: 'redis://localhost:' + 8000,
    });

    client.on('error', (err : unknown) => {
        if (err instanceof Error) {
            console.error(err);
        }
        console.log('Redis Client Error', err)
    });

    await client.connect();

    // await client.set('PORT', PORTS[0]);
    await client.set('PORT', 8000);

    // await client.set('obj', Buffer.from(JSON.stringify({its: 'ld'})));

    const port = await client.get('PORT');
    console.log(port);

}

async function main2() {
    const client = createClient({
        url: 'redis://localhost:' + PORTS[2],
    });

    client.on('error', (err : unknown) => {
        if (err instanceof Error) {
            console.error(err);
        }
        console.log('Redis Client Error', err)
    });

    await client.connect();

    await client.set('port', PORTS[2]);
    const port = await client.get('port');

    console.log(port)

}

async function main3() {
    const client = createClient({
        url: 'redis://localhost:' + PORTS[3],
    });

    client.on('error', (err : unknown) => {
        if (err instanceof Error) {
            console.error(err);
        }
        console.log('Redis Client Error', err)
    });

    await client.connect();

    await client.set('port', PORTS[3]);
    const port = await client.get('port');

    console.log(port);

}

async function main4() {
    const client = createClient({
        url: 'redis://localhost:' + PORTS[4]
    });

    client.on('error', (err : unknown) => {
        if (err instanceof Error) {
            console.error(err);
        }
        console.log('Redis Client Error', err)
    });

    await client.connect();

    await client.set('port', PORTS[4]);
    const port = await client.get('port');

    console.log(port);

}


async function main5() {
    const client = createClient({
        url: 'redis://localhost:' + PORTS[5],
    });

    client.on('error', (err : unknown) => {
        if (err instanceof Error) {
            console.error(err);
        }
        console.log('Redis Client Error', err)
    });

    await client.connect();

    await client.set('port', PORTS[5]);
    const port = await client.get('port');

    console.log(port);

}

async function main6() {
    const client = createClient({
        url: 'redis://localhost:' +  PORTS[6],
    });

    client.on('error', (err : unknown) => {
        if (err instanceof Error) {
            console.error(err);
        }
        console.log('Redis Client Error', err)
    });

    await client.connect();

    await client.set('port',  PORTS[6]);
    const port = await client.get('port');

    console.log(port);

}


// main1();
// main2().then(main3).then(main4)
main1().then(main2);