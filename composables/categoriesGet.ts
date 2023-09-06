export default () => {
    const {
        pending,
        data,
        error
    } = useFetch(
        `http://api.local/bottin/commerces`
    );
    return {
        pending,
        data,
        error
    };
}