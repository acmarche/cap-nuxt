export default (slug: String) => {
    const {pending: pendingShop, data: shop, error: errorShop} = useLazyFetch(
        `http://api.local/bottin/fichebyslugname/${slug}`
    );
    return {
        pendingShop,
        shop,
        errorShop
    };
}