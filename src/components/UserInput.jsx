
export default function UserInput({ userInput, handleUserInput }){





    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label>Initial Investment</label>
                    <input value={userInput.initialInvestment}  required  onChange={(e) => handleUserInput('initialInvestment', e.target.value)} />
                </p>
                <p>
                    <label>Annual Investment</label>
                    <input value={userInput.annualInvestment}  required onChange={(e) => handleUserInput('annualInvestment', e.target.value)}  />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label>Expected Return</label>
                    <input value={userInput.expectedReturn}  required onChange={(e) => handleUserInput('expectedReturn', e.target.value)} />
                </p>
                <p>
                    <label>Duration</label>
                    <input value={userInput.duration}  required onChange={(e) => handleUserInput('duration', e.target.value)} />
                </p>
            </div>
        </section>
    )
}