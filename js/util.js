export function createRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgba(${r}, ${g}, ${b}, 0.5)`;
}

export function formattedDate(date) {
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const date2 = new Date(date);
    const day = date2.getDate();
    const monthIndex = date2.getMonth();
    const year = date2.getFullYear();
    const month = monthNames[monthIndex];
    return `${day} ${month} ${year}`;
}