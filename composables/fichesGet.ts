export default (categorySelected: Number) => {
    const {
        pending: pendingFiches,
        data: fiches,
        error: errorFiches
    } = useLazyFetch(
        `http://api.local/bottin/fiches/rubrique/${categorySelected}`
    );
    return {
        pendingFiches,
        fiches,
        errorFiches
    };
}