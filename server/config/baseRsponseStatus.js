export default {
    // Success
    SUCCESS: { isSuccess: true, code: 1000, message: "성공" },

    // Common
    TOKEN_EMPTY: {
        isSuccess: false,
        code: 2000,
        message: "JWT 토큰을 입력해주세요.",
    },
    TOKEN_VERIFICATION_FAILURE: {
        isSuccess: false,
        code: 3000,
        message: "JWT 토큰 검증 실패",
    },
    TOKEN_VERIFICATION_SUCCESS: {
        isSuccess: true,
        code: 1001,
        message: "JWT 토큰 검증 성공",
    }, // ?

    //Request error

    MEMBER_NAME_EMPTY: {
        isSuccess: false,
        code: 2001,
        message: "새로운 멤버의 이름을 입력해주세요",
    },
    MEMBER_NAME_LENGTH: {
        isSuccess: false,
        code: 2002,
        message: "멤버의 이름을 2글자 이상으로 입력해주세요",
    },
    MEMBER_NAME_TYPEERROR: {
        isSuccess: false,
        code: 2003,
        message: "한글로 입력해주세요.",
    },

    MEMBER_EG_NAME_EMPTY: {
        isSuccess: false,
        code: 2004,
        message: "멤버의 영어이름을 입력해주세요",
    },
    MEMBER_EG_NAME_LENGTH: {
        isSuccess: false,
        code: 2005,
        message: "멤버의 영어이름은 3글자 이상으로 입력해주세요",
    },
    MEMBER_EG_NAME_TYPEERROR: {
        isSuccess: false,
        code: 2006,
        message: "영어이름은 영어로 입력해주세요",
    },
    MEMBER_ROLEIDX_EMPTY: {
        isSuccess: false,
        code: 2007,
        message: "멤버의 역할을 선택해주세요",
    },
    MEMBER_SUBSCRIPTION_EMPTY: {
        isSuccess: false,
        code: 2008,
        message: "멤버의 가입년도를 입력해주세요",
    },

    MEMBER_BIRTH_EMPTY: {
        isSuccess: false,
        code: 2009,
        message: "멤버의 생일을 입력해주세요",
    },

    MEMBER_CANNOT_MODIFEIED: {
        isSuccess: false,
        code: 2999,
        message: "수정불가한 멤버입니다. 개발자에게 문의해주세요",
    },
    // Response error
    SIGNUP_REDUNDANT_EMAIL: {
        isSuccess: false,
        code: 3001,
        message: "중복된 이메일입니다.",
    },
    SIGNUP_REDUNDANT_NICKNAME: {
        isSuccess: false,
        code: 3002,
        message: "중복된 닉네임입니다.",
    },

    SIGNIN_EMAIL_WRONG: {
        isSuccess: false,
        code: 3003,
        message: "아이디가 잘못 되었습니다.",
    },
    SIGNIN_PASSWORD_WRONG: {
        isSuccess: false,
        code: 3004,
        message: "비밀번호가 잘못 되었습니다.",
    },
    SIGNIN_INACTIVE_ACCOUNT: {
        isSuccess: false,
        code: 3005,
        message: "비활성화 된 계정입니다. 고객센터에 문의해주세요.",
    },
    SIGNIN_WITHDRAWAL_ACCOUNT: {
        isSuccess: false,
        code: 3006,
        message: "탈퇴 된 계정입니다. 고객센터에 문의해주세요.",
    },
    SIGNIN_PASSWORD_LENGTH: {
        isSuccess: false,
        code: 3007,
        message: "비밀번호는 8글자 이상입력해주세요",
    },

    //Connection, Transaction 등의 서버 오류
    DB_ERROR: { isSuccess: false, code: 4000, message: "데이터 베이스 에러" },
    SERVER_ERROR: { isSuccess: false, code: 4001, message: "서버 에러" },
};
