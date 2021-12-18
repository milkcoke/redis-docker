import redis, { createClient } from 'redis';

(async () => {
    const client = redis.createClient();

    client.on('error', (err : unknown) => {
        if (err instanceof Error) {
            console.error(err);
        }
        console.log('Redis Client Error', err)
    });

    await client.connect();

    await client.set('key', 'value');
    await client.set('name', 'jayce');
    await client.set('age', 15);
    await client.set('obj', Buffer.from(JSON.stringify({its: 'ld'})));
    const value = await client.get('key');
    console.dir(value);

})();