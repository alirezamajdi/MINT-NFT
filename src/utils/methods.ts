var ukPostcode = require('uk-postcode');
import {jwtDecode} from 'jwt-decode';

export type NSU = number | string | undefined;

export const getPrice = (x: NSU): NSU => {
  if (x) return '£' + Number(x).toLocaleString();
};

export const addCommas = (x: NSU) => {
  if (x) return Number(x).toLocaleString();
};

export const setDash = (x: NSU) => {
  return Boolean(x) ? x : '-';
};

export const subText = (value: string | undefined, length: number) => {
  return value && value.length > length
    ? `${value.substring(0, length)}...`
    : value;
};

export const getFileSize = (x: NSU): string => {
  x = Number(x);
  if (x < 1000000) {
    const sizeInKB = (x / 1000).toFixed(2);
    return String(sizeInKB) + ' KB';
  } else {
    const sizeInMB = (x / 1000000).toFixed(2);
    return String(sizeInMB) + ' MB';
  }
};

export const stringToSlug = (str: string): string => {
  str = str.replace(/^\s+|\s+$/g, ''); // trim
  str = str.toLowerCase();

  // remove accents, swap ñ for n, etc
  var from = 'àáäâèéëêìíïîòóöôùúüûñç·/_,:;';
  var to = 'aaaaeeeeiiiioooouuuunc------';
  for (var i = 0, l = from.length; i < l; i++) {
    str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
  }

  str = str
    .replace(/[^a-z0-9 -]/g, '') // remove invalid chars
    .replace(/\s+/g, '-') // collapse whitespace and replace by -
    .replace(/-+/g, '-'); // collapse dashes

  return str;
};

export const slugToString = (slug: string | string[] | undefined) => {
  if (typeof slug === 'string') {
    var words = slug?.split('-');

    for (var i = 0; i < words.length; i++) {
      var word = words[i];
      words[i] = word;
    }
    return words.join(' ');
  } else return slug;
};

export const convertSearchParams = (obj: any) => {
  let arr = [];
  for (let i in obj) {
    if (obj[i]?.length > 0) {
      if (typeof obj[i] === 'object') {
        for (let j = 0; j < obj[i].length; j++) {
          arr.push(`${i}[]=${obj[i][j]}`);
        }
      } else {
        arr.push(`${i}=${obj[i]}`);
      }
    }
  }
  return '?' + arr.join('&');
};

export const convertQueryUrlToObject = (query: any) => {
  let obj: Record<string, string | Array<string>> = {};
  for (let i in query) {
    if (i.slice(-2) === '[]') {
      if (typeof query[i] === 'object') {
        obj[i.slice(0, -2)] = query[i];
      } else obj[i.slice(0, -2)] = [query[i]];
    } else {
      obj[i] = query[i];
    }
  }
  return obj;
};
export const convertQueryUrlToObjectWithoutPage = (query: any) => {
  let obj: Record<string, string | Array<string>> = {};
  for (let i in query) {
    if (i.slice(-2) === '[]') {
      if (typeof query[i] === 'object') {
        obj[i.slice(0, -2)] = query[i];
      } else obj[i.slice(0, -2)] = [query[i]];
    } else if (i !== 'page') {
      obj[i] = query[i];
    }
  }
  return obj;
};
export const toLocalDate = (x: Date | undefined | string) => {
  return x
    ? new Date(x).getMonth() +
        1 +
        '/' +
        new Date(x).getDate() +
        '/' +
        new Date(x).getFullYear()
    : '-';
}; //3/1/2023

export const toDateString = (x: Date | undefined | string) => {
  return x ? new Date(x).toDateString() : '-';
}; //Mon Jan 02 2023

export const toCustomDateString = (x: Date | undefined | string) => {
  // x is iso format like 2023-12-12T20:30:00.000Z
  if (x) {
    const convertedForm = new Date(x).getDate();
    const splitDayOfIso = String(x).slice(8, 10);
    if (Number(convertedForm) == Number(splitDayOfIso)) {
      return new Date(x).toDateString();
    } else if (Number(convertedForm) == Number(splitDayOfIso) + 1) {
      const date = new Date(x);
      date.setDate(date.getDate() - 1);
      return date.toDateString();
    } else {
      const date = new Date(x);
      date.setDate(date.getDate() + 1);
      return date.toDateString();
    }
  } else return '-';
}; //Mon Jan 02 2023

export const toLocaleTimeString = (x: Date | undefined | string) => {
  return x ? new Date(x).toLocaleTimeString() : '-';
}; //1:12:03 PM

export const toISOStringWithIncreaseOneDay = (date: any): any => {
  if (date) {
    const day = String(date.getDate()).padStart(2, '0');
    const beforDayOfISOS = date.toISOString().slice(0, 8);
    const afterDayOfISOS = date.toISOString().slice(10);
    return beforDayOfISOS + String(day) + afterDayOfISOS;
  } else return undefined;
}; // 2023-12-12T20:30:00.000Z

export const isEmpty = (x: string | Array<any> | undefined | null): boolean => {
  return x ? x.length === 0 : true;
};
export const notEmpty = (
  x: string | Array<any> | undefined | null
): boolean => {
  return x ? x.length > 0 : false;
};
export const isEmptyObject = (x: Object): boolean => {
  return x ? Object.keys(x).length === 0 : true;
};
export const notEmptyObject = (x: Object | undefined): boolean => {
  return x ? Object.keys(x).length > 0 : false;
};
export const getLengthObject = (x?: Object): number => {
  return x ? Object.keys(x).length : 0;
};
export const getJustAdded = (x: Date | string | undefined): boolean => {
  // get timeStamp lastWeek
  const lastWeek = new Date().getTime() - 1000 * 60 * 60 * 24 * 7;
  const timeStamp = x && new Date(x).getTime();
  return timeStamp ? timeStamp > lastWeek : false;
};

export const getAddress = (
  address: (PropertyAddress & { hasDetail?: boolean }) | undefined
): string => {
  if (address) {
    var postcode = ukPostcode.fromString(address.postcode);
    if (postcode.isValid()) {
      if (address.hasDetail) {
        return (
          (address.address_2!) +
          ', ' +
          (address.address_1!) +
          ', ' +
          (address.city?.name!) +
          ' ' +
          (address.state?.name!) +
          ' ' +
          postcode
        );
      } else
        return (
          (address.address_1!) +
          ', ' +
          (address.city?.name!) +
          ' ' +
          postcode.outward
        );
    } else return '-';
  } else return '-';
};


export const isExpiredToken = (token?: string | null): boolean => {
  if (token) {
    let decode: DecodeToken = jwtDecode(token);
    var currentTime = new Date().getTime();
    // Add two minutes (120,000 milliseconds) to the current time and convert to seconds
    var newTime = (currentTime + 2 * 60 * 1000) / 1000;
    let exp = decode.exp;
    return Math.floor(newTime) > exp;
  } else return true;
};

export const convertToTimeWithAMPM = (value: string) => {
  const date = new Date(value);
  var hours = date.getHours();
  var minutes: string | number = date.getMinutes();
  var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0' + minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  return strTime;
};

function formatAMPMTime(timeStr: string) {
  //00:30
  const [hours, minutes] = timeStr.split(':');
  let ampm = '';
  let formattedHours = parseInt(hours, 10);

  if (formattedHours >= 12) {
    ampm = 'PM';
    if (formattedHours > 12) {
      formattedHours -= 12;
    }
  } else {
    ampm = 'AM';
    if (formattedHours == 0) {
      formattedHours = 12;
    }
  }

  const formattedTime = `${formattedHours
    .toString()
    .padStart(2, '0')}:${minutes} ${ampm}`;
  return formattedTime; //12:00 am
}

export const getTimeWithoutTimezone = (dateString: string) => {
  const date = new Date(dateString);
  const hours = date.getUTCHours().toString().padStart(2, '0');
  const minutes = date.getUTCMinutes().toString().padStart(2, '0');
  const timeString = `${hours}:${minutes}`;
  return formatAMPMTime(timeString);
};

export const getBedNumberLabel = (value?: string, defult?: string) => {
  if (value) {
    if (value === '0') return 'studio';
    else if (value === '1') return value + ' room';
    else if (value === '100') return '+10 rooms';
    else return value + ' rooms';
  } else return defult;
};

export const toLocalDays = (value: number | undefined) => {
  if (value) {
    if (value === 1) return value + 'day';
    else if (value < 7) return value + 'days';
    else if (value === 7) return value + 'week';
    else if (value < 30) return Math.floor(value / 4) + 'weeks';
    else return Math.floor(value / 30) + 'mos';
  }
  return;
};

export const splitUnderLine = (value: string | undefined) => {
  return value?.split('_').join(' ');
};

export const splitEmail = (value: string | undefined) => {
  return value?.split('@')[0];
};

export const getAmPm = (value: string | null) => {
  if (value) {
    if (Number(value) > 0 && Number(value) < 12) return value + 'am';
    else if (Number(value) > 11 && Number(value) < 25) {
      if (Number(value) === 12) return '12pm';
      else return Number(value) - 12 + 'pm';
    }
  } else return null;
};

export const getDiffDays = (arg1: string, arg2: string) => {
  const date1 = new Date(arg1);
  const date2 = new Date(arg2);
  const diffTime = Math.abs(Number(date2) - Number(date1));
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
};

export const convertBase64ToBlob = (base64Image: string) => {
  // Split into two parts
  const parts = base64Image.split(';base64,');

  // Hold the content type
  const imageType = parts[0].split(':')[1];

  // Decode Base64 string
  const decodedData = window.atob(parts[1]);

  // Create UNIT8ARRAY of size same as row data length
  const uInt8Array = new Uint8Array(decodedData.length);

  // Insert all character code into uInt8Array
  for (let i = 0; i < decodedData.length; ++i) {
    uInt8Array[i] = decodedData.charCodeAt(i);
  }

  // Return BLOB image after conversion
  return new Blob([uInt8Array], { type: imageType });
};

export const isPersian = (str?: string) => {
  var p = /^[\u0600-\u06FF\s]+$/;
  return str ? p.test(str) : false;
};

export const isValidUrl = (urlString?: string) => {
  const urlRegex = /^(http|https):\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/;
  return urlRegex.test(String(urlString));
};

export const isVideoFormat = (value?: string): boolean => {
  if (value)
    return (
      /video/.test(value) ||
      value == 'video/mp4' ||
      value == 'video/mov' ||
      value == 'video/avi'
    );
  else return false;
};

export const isImageFormat = (value?: string): boolean => {
  if (value)
    return (
      value == 'image/png' ||
      value == 'image/jpg' ||
      value == 'image/jpeg' ||
      value == 'image/heic'
    );
  else return false;
};

export const isValidPhoneNumber = (phoneNumber: NSU) => {
  const pattern =
    /^(?:\+?\d{1,3}[\s-]?)?\(?\d{1,4}\)?[\s-]?\d{1,9}[\s-]?\d{1,9}$/;
  return pattern.test(String(phoneNumber));
};

export const addZerosToEnd = (arg?: string) => {
  if (arg) {
    while (arg.length < 20) {
      arg += '0';
    }
    return arg;
  }
};

export const handleFieldChange = (
  value: string | boolean | number,
  name: string,
  inputs: Object
) => {
  const updatedObject = {
    ...inputs,
    [name]: value,
  };
  return updatedObject;
};
