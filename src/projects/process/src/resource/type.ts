import ProcessesItem from "../process/type";

export default interface ResourceItem{
    resourceNum: number,
    total: number,
    // setTotal: {(newTotal: number): void}
    avaliable: number,
    // setAvaliable: {(newAvaliable: number): void}
    waitlist: ProcessesItem[]
    // setWaitlist: {(newWaitlist: number[]): void}
}
