export default (slug: String) => {
    const config = useRuntimeConfig()

    const {pending: pendingShop, data: shop, error: errorShop} = useLazyFetch(
        `${config.public.API_URL}/fichebyslugname/${slug}`
    );
    return {
        pendingShop,
        shop,
        errorShop
    };
}