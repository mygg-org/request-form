import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


const usePasswordTogle = () => {
    const [visible, setVisibility] = useState();
    const Icon = (<FontAwesomeIcon icon={visible ? "eye-slash" : "eye"}
        onClick={() => setVisibility(visibility => !visibility)} />
    );

    const InputType = visible ? "text" : "password";

    return [InputType, Icon]
}

export default usePasswordTogle