export const SET_BRIGHTNESS = 'SET_BRIGHTNESS'
export const SET_CORRECTION = 'SET_CORRECTION'
export const SET_ISO = 'SET_ISO'
export const SET_APERTURE = 'SET_APERTURE'
export const SET_SHUTTER = 'SET_SHUTTER'

export interface ICameraStore {
    brightness: number,
    correction: number,
    iso: number,
    aperture: number,
    shutter: number
}