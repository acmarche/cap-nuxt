export default (categorySelected: Number) => {
    const config = useRuntimeConfig()

    const {
        pending: pendingChilds,
        data: childs,
        error: errorChilds
    } = useLazyFetch(
        `${config.public.API_URL}/categories/byparent/${categorySelected}`, {
            /* Changing the id will trigger a refetch */
            watch: [categorySelected]
        }
    );
    return {
        pendingChilds,
        childs,
        errorChilds
    };
}