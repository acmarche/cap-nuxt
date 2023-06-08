export default () => {
    const {
        pending: pendingCategories,
        data: categories,
        error: errorCategories
    } = useLazyFetch(
        `http://api.local/bottin/commerces`
    );
    return {
        pendingCategories,
        categories,
        errorCategories
    };
}