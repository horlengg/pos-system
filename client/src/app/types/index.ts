export interface Menu {
    label : string,
    icon  : string,
    to    : string,
    child?: Menu[]
}