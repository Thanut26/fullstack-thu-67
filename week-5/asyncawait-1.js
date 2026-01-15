function promiseTimeout(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

async function run() {
    console.log('Start!!');
    await promiseTimeout(2000);
    console.log('stop!!');
}

run();