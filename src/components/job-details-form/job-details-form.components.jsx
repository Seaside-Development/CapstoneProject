import React from "react";

const JobForm = () => {
    return (
        <div className="bg-white py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24">
            <form>
                <label>
                    Name:
                <input type="text" name="name" />
                </label>
            <input type="submit" value="Submit" />
        </form>
        </div>  
    );
}
export default JobForm;