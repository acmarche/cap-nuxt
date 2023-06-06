export default () => {
    const {pending: pendingCategories, data: categories, error: errorCategories} = useLazyFetch(
        `https://bottin.marche.be/api/categories.php`
    );
    return {
        pendingCategories,
        categories,
        errorCategories
    };
}