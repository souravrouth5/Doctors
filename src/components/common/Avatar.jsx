function stringToColor(string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
        hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';

    for (i = 0; i < 3; i += 1) {
        const value = (hash >> (i * 8)) & 0xff;
        color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
}

const getNameInitials = (name) => {
    const arr = name.split(' ')
    const updatedArr = arr.map(item => {
        return item[0]
    })

    return updatedArr.join('')
}

export function stringAvatar(name) {
    return {
        sx: {
            bgcolor: stringToColor(name),
        },
        // children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
        children: `${getNameInitials(name)}`
    };
}

// export default function BackgroundLetterAvatars() {
//     return (
//         <Stack direction="row" spacing={2}>
//             <Avatar {...stringAvatar('Kent Dodds')} />
//             <Avatar {...stringAvatar('Jed Watson')} />
//             <Avatar {...stringAvatar('Tim Neutkens')} />
//         </Stack>
//     );
// }
