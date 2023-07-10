export function formatDate(dateString: string) {
    // const dateString = "1970-01-01T14:00:00+01:00";
    const date = new Date(dateString);

    const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        timeZone: "Europe/Paris"
    };

    const formattedDate = date.toLocaleDateString("fr-FR", options);
    console.log(date.getHours());

    return date.getHours()
}