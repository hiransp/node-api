pipeline {
    agent any

    stages {

        stage("Test Stage"){
            steps{
                echo "====++++executing Test Stage++++===="
                sh whoami
            }
            post{
                always{
                    echo "====++++always++++===="
                }
                success{
                    echo "====++++Test Stage executed successfully++++===="
                }
                failure{
                    echo "====++++Test Stage execution failed++++===="
                }
        
            }
        }
    }
}
