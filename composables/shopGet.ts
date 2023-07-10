export default (shopId: Number) => {
    const {pending: pendingShop, data: shop, error: errorShop} = useLazyFetch(
        `http://api.local/bottin/fiche/${shopId}`
    );
    return {
        pendingShop,
        shop,
        errorShop
    };
}