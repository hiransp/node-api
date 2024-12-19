pipeline {
    agent any

    environment{

        DOCKER_HUB_REPO = 'hiranspx/node-server'
        TARGET_SERVER = '34.224.82.156'
    }

    stages {

        stage("Checkout Code"){
            steps{

                git(
                    url: "https://github.com/hiransp/node-web-server",
                    branch: "main",
                    changelog: true,
                    poll: true
                )
            }
            post{
                always{
                    echo "====++++always++++===="
                }
                success{
                    echo "====++++Checkout Code executed successfully++++===="
                }
                failure{
                    echo "====++++Checkout Code execution failed++++===="
                }
            }
        }

        stage("Build Docker Image"){
            steps{

                sh 'docker build -t ${DOCKER_HUB_REPO}:3.2 -f Dockerfile .'
                sh "######################### DOCKER IMAGES #########################"
                sh 'docker image ls'
            }
        }

        stage('Push to Docker Hub')
    }
}