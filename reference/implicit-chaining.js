const _ = require('lodash')
const uuid = require('uuid')
const isDate = require('../methods/isDate')

const reservations = [
	{
		key: '1',
		val: 11,
		arrivalDate: '4/11/19',
		departureDate: '5/11/19',
		hotelName: 'Bikini Bottom Hilton',
		name: 'SpongeBob SquarePants'
	},
	{
		key: '2',
		val: 22,
		arrivalDate: '4/22/19',
		departureDate: '5/22/19',
		hotelName: 'Hilton NYC',
		name: 'Patrick Star'
	},
	{
		key: '3',
		val: 33,
		arrivalDate: '4/33/19',
		departureDate: '5/33/19',
		hotelName: 'Crabs Inn',
		name: 'Squidward Tentacles'
	},
	{
		key: '4',
		val: 44,
		arrivalDate: '11/1/19',
		departureDate: '12/24/19',
		hotelName: 'MGM Grand Las Vegas',
		name: 'Mrs. Puff'
	}
]

const HiltonReservations = reservationsList => {
	return _(reservationsList)
		.filter(obj => {
			// Filter out invalid dates
			return isDate(obj.arrivalDate) && isDate(obj.departureDate)
		})
		.filter(obj => {
			// Filter out `hotel names` that do not include the word `hilton`
			return _.toLower(obj.hotelName).indexOf('hilton') >= 0
		})
		.map((obj, idx) => {
			return {
				id: uuid.v4(),
				arrival: obj.arrivalDate,
				departure: obj.departureDate,
				customer: obj.name,
				hotel: obj.hotelName,
				info: {
					_key: obj.key,
					_val: obj.val,
					_idx: idx
				}
			}
		})
		.value()
}

const GetReservations = HiltonReservations(reservations)

console.log(GetReservations)

const result_obj = [
	{
		id: 'e7c4f071-560b-4c45-9756-49e4c2df1603',
		arrival: '4/11/19',
		departure: '5/11/19',
		customer: 'SpongeBob SquarePants',
		hotel: 'Bikini Bottom Hilton',
		info: { _key: '1', _val: 11, _idx: 0 }
	},
	{
		id: '21938e01-cbdb-43fd-9801-0a95bde8a8f0',
		arrival: '4/22/19',
		departure: '5/22/19',
		customer: 'Patrick Star',
		hotel: 'Hilton NYC',
		meta: { _key: '2', _val: 22, _idx: 1 }
	}
]
