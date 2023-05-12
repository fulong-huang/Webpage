
export default interface ResourceItem{
    resourceNum: number,
    total: number,
    // setTotal: {(newTotal: number): void}
    avaliable: number,
    // setAvaliable: {(newAvaliable: number): void}
    waitlist: number[],
    // setWaitlist: {(newWaitlist: number[]): void}
}