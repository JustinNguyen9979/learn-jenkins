pipeline {
    agent any
    stages {
        stage('Clone') {
            steps {
                git 'https://github.com/JustinNguyen9979/learn-jenkins.git'
            }
        }
        // stage('Build') {
        //     steps {
        //         withDockerRegistry(credentialsId: 'Docker-Hub', url: 'https://index.docker.io/v1/') {
        //             sh 'docker build -t 997909799/learn-jenkins:V1.01 .'
        //             sh 'docker push 997909799/learn-jenkins:V1.01'
        //         }
        //     }

        // }
        
        stage("SSH Agent") {
            steps {
                sshagent(['SSH-Agent-Remote-Justin']) {
                    sh 'ssh -o StrictHostKeyChecking=no -l justin 192.168.1.112 touch /home/justin/test-ssh.txt'
                }
            }
        }
    }
}
